import res from '../utilities/response';
import letter from '../models/letter';

export async function getLtr(event) {
  try {
    const foundLetter = await letter.getById(event.pathParameters.letterId);
    return res.ok(foundLetter);
  } catch (e) {
    return res.error({ error: 'letter not found' });
  }
}

export async function createLtr(event) {
  try {
    const incomingLetter = JSON.parse(event.body);
    const { letterId } = await letter.create(incomingLetter);
    return res.ok({ letterId });
  } catch (e) {
    return res.error({ error: 'failed to create letter' });
  }
}

export async function deleteLtr(event) {
  try {
    const { letterId } = JSON.parse(event.body);
    await letter.deleteById(letterId);
    return res.ok({ response: 'letter deleted' });
  } catch (e) {
    return res.error({ error: 'failed to delete letter' });
  }
}

export async function updateLtr(event) {
  try {
    const { letterId, letterHTML } = JSON.parse(event.body);
    await letter.updateById(letterId, letterHTML);
    return res.ok({ letterId });
  } catch (e) {
    return res.error({ error: 'failed to update letter' });
  }
}
