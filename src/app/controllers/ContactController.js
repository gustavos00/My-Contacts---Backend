class ContactController {
  index(request, response) { // List all records
    response.send('Hello World :)')
  }

  show(request, response) { // Get a single record

  }

  store(request, response) { // Save a record

  }

  update(request, response) { // Update a record

  }

  delete(request, response) { // Delete a record

  }
}

module.exports = new ContactController();
