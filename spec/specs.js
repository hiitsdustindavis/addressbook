describe('Contact', function() {
  it("creates a new contact with the given specifications", function() {
    var testContact = new Contact("Rita","Moreno","555-123-4567");
    expect(testContact.firstName).to.equal("Rita");
    expect(testContact.lastName).to.equal("Moreno");
    expect(testContact.phoneNumber).to.equal("555-123-4567");
    expect(testContact.addresses).to.eql([]);
  });

  it("adds the fullName method to all contacts", function() {
      var testContact = new Contact("Sherlock","Holmes");
      expect(testContact.fullName()).to.equal("Sherlock Holmes");
  });
});

describe('Address', function() {
  it("creates a new address with the given specifications", function() {
    var testAddress = new Address("Home", "123 Main St", "Test City","Test State");
    expect(testAddress.addresstype).to.equal("Home");
    expect(testAddress.street).to.equal("123 Main St");
    expect(testAddress.city).to.equal("Test City");
    expect(testAddress.state).to.equal("Test State");
  });

  it("adds the fullAddress method to all addresses", function() {
    var testAddress = new Address("Home", "123 Main St", "Test City","Test State");
    expect(testAddress.fullAddress()).to.equal("Home, 123 Main St, Test City, Test State");
  });


});