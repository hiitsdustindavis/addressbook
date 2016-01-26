function Contact(firstName,lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.addresses = [];
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

function Address(addresstype, street, city, state) {
  this.addresstype = addresstype;
  this.street = street;
  this.city = city;
  this.state = state;
}

Address.prototype.fullAddress = function() {
  return this.addresstype + ", " + this.street + ", " + this.city + ", " + this.state;
}

function resetFields() {
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-phone-number").val("");
    $("input.new-street").val("");
    $("input.new-city").val("");
    $("input.new-state").val("");
}

$(document).ready(function() {
  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address" id="extraAddress">' +
                                  '<label for="addresstype">Address Type</label>' +
                                  '<label class="radio-inline">' +
                                  '<input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Home">' +
                                  'Home' +
                                  '</label>' +
                                  '<label class="radio-inline">' +
                                  '<input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Work">' +
                                  'Work' +
                                  '</label>' +
                                  '<label class="radio-inline">' +
                                  '<input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="PO Box">' +
                                  'P.O.Box' +
                                  '</label> ' +
                                 '<div class="form-group">' +
                                   '<label for="new-street">Street</label>' +
                                   '<input type="text" class="form-control new-street">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-city">City</label>' +
                                   '<input type="text" class="form-control new-city">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-state">State</label>' +
                                   '<input type="text" class="form-control new-state">' +
                                 '</div>' +
                               '</div>');
  });

  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    $('#extraAddress').hide();
    // $('#extraAddress').not(document.getElementById('extraAddress')).css('display', 'none');
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedPhoneNumber = $("input#new-phone-number").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);

    $(".new-address").each(function() {
      var inputtedAddressType = $('input[name="inlineRadioOptions"]:checked').val();
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();
      var newAddress = new Address(inputtedAddressType, inputtedStreet, inputtedCity, inputtedState)
      newContact.addresses.push(newAddress)
    });

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".phone-number").text(newContact.phoneNumber);
      $("ul#addresses").text("");

      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
      });
    });

    resetFields();

  });
});
