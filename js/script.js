// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
// part 2 //
// select element with the assign class which appears when guest list is full
const assignButton = document.querySelector(".assign");
//  the vlaue should select element with assigned-list class... resulting the guest nam and assigned dish
const assignedItems = document.querySelector(".assigned-items");

///////////////////// add event listener & create an element /////////////////////
addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;
  // console.log(guest);
  if (guest !== "") {
    // the line 20-22 cut and placed to 'addToList'
    // const listItem = document.createElement("li");
    // listItem.innerText = guest;
    // guestList.append(listItem);
    //
    addToList(guest);
    updateGuestCount();
    clearInput();
  }
});

///////////////////// clear the input box /////////////////////
const clearInput = function () {
  guestInput.value = "";
};

///////////////////// refactor code /////////////////////
const addToList = function (guest) {
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};

///////////////////// limit the guest list /////////////////////
const updateGuestCount = function () {
  const guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;

  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};

//////////////// Select assigned items & build an array ////////////////
//////////////// 2. Select elements & loop through array ////////////////
//////////////// 3. add an event listener & update potluckItems array ////////////////
const assignItems = function () {
  const potluckItems = [
    "charcuterie board",
    "halloumi cheese sticks",
    "garlic bread",
    "macaroni cheese",
    "grilled zucchini",
    "red skinned mashed potatoes",
    "baked salmon",
    "fried chicken",
    "mango float",
    "earl grey pie",
    "seasonal fruit",
    "chopped salad",
    "drinks",
  ];

  const allGuests = document.querySelectorAll(".guest-list li");

  // 2. select element...
  for (let guest of allGuests) {
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
    let randomPotluckItem = potluckItems[randomPotluckIndex];

    let listItem = document.createElement("li");
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
    assignedItems.append(listItem);
    // 3. add event listener (splice helps prevent duplicate items of food)
    potluckItems.splice(randomPotluckIndex, 1);
  }
};

// 3. add event listener
assignButton.addEventListener("click", function () {
  assignItems();
  assignButton.disabled = true;
});