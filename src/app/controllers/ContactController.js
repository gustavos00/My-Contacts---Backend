const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    // List all records
    const contacts = await ContactsRepository.findAll();
    response.json(contacts);
  }

  async show(request, response) {
    // Get a single record
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'User not found' });
    }

    return response.json(contact);
  }

  store(request, response) {
    // Save a record
  }

  update(request, response) {
    // Update a record
  }

  async delete(request, response) {
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'User not found' });
    }

    await ContactsRepository.delete(id);
    return response.sendStatus(204);
  }
}

module.exports = new ContactController();
