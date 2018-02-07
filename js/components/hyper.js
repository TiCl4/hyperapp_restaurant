webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var actions = exports.actions = {
  up: up,
  intro: intro,
  showMenu: showMenu
};

function up(state, actions) {
  return { count: state.count + 1 };
}

function showMenu() {}

function intro(state, actions) {
  console.log('Just ran my first action');
  return { count: state.count + 1 };
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _hyperapp = __webpack_require__(0);

var _Header = __webpack_require__(15);

var _Header2 = _interopRequireDefault(_Header);

var _TopImg = __webpack_require__(20);

var _TopImg2 = _interopRequireDefault(_TopImg);

var _OurStory = __webpack_require__(16);

var _OurStory2 = _interopRequireDefault(_OurStory);

var _SpecialMenu = __webpack_require__(19);

var _SpecialMenu2 = _interopRequireDefault(_SpecialMenu);

var _RandomQuote = __webpack_require__(17);

var _RandomQuote2 = _interopRequireDefault(_RandomQuote);

var _Reviews = __webpack_require__(18);

var _Reviews2 = _interopRequireDefault(_Reviews);

var _ContactUs = __webpack_require__(13);

var _ContactUs2 = _interopRequireDefault(_ContactUs);

var _Footer = __webpack_require__(14);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'div',
    { 'class': 'app' },
    (0, _hyperapp.h)(_Header2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_TopImg2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_OurStory2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_SpecialMenu2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_RandomQuote2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Reviews2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_ContactUs2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Footer2.default, { state: state, actions: actions })
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var globalState = exports.globalState = {
  count: 0
};

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ContactUs;

var _hyperapp = __webpack_require__(0);

function ContactUs(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { "class": "contactUs textureBG" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h5",
        { "class": "comp-title" },
        "Contact Us"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        "We are always here to help you"
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "row box" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)(
            "div",
            { "class": "city" },
            "Los Angeles, ",
            (0, _hyperapp.h)(
              "span",
              null,
              "California"
            )
          ),
          (0, _hyperapp.h)(
            "h6",
            { "class": "street" },
            "4456 Highway Ave"
          ),
          (0, _hyperapp.h)(
            "h6",
            null,
            "Hollywood, CA, 90210"
          ),
          (0, _hyperapp.h)(
            "p",
            null,
            (0, _hyperapp.h)(
              "strong",
              null,
              "Email:"
            ),
            (0, _hyperapp.h)(
              "a",
              { href: "mailto:info@airestaurant.com" },
              " info@airestaurant.com"
            )
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)(
            "h6",
            null,
            "Phone:"
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "phone" },
            "435-444-1234"
          ),
          (0, _hyperapp.h)(
            "h6",
            { "class": "lunch" },
            "Lunch Service:"
          ),
          (0, _hyperapp.h)(
            "p",
            null,
            "Friday, Saturday and Sunday: Bookings",
            (0, _hyperapp.h)("br", null),
            " from 12pm - 1:30pm."
          ),
          (0, _hyperapp.h)(
            "h6",
            { "class": "dinner" },
            "Dinner Service:"
          ),
          (0, _hyperapp.h)(
            "p",
            null,
            "Daily",
            (0, _hyperapp.h)("br", null),
            "from 6pm - 9:30pm"
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;

var _hyperapp = __webpack_require__(0);

function Footer(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "footer",
    null,
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "container" },
        (0, _hyperapp.h)(
          "nav",
          { "class": "menu" },
          (0, _hyperapp.h)(
            "a",
            { href: "#" },
            "Our Story"
          ),
          (0, _hyperapp.h)(
            "a",
            { href: "#" },
            "Reviews"
          ),
          (0, _hyperapp.h)(
            "a",
            { href: "#" },
            "Special Menu"
          ),
          (0, _hyperapp.h)(
            "a",
            { href: "#" },
            "Reservations"
          ),
          (0, _hyperapp.h)(
            "a",
            { href: "#" },
            "Contact Us"
          )
        ),
        (0, _hyperapp.h)(
          "ul",
          null,
          (0, _hyperapp.h)(
            "li",
            null,
            (0, _hyperapp.h)(
              "a",
              { href: "https://www.facebook.com/", target: "new" },
              (0, _hyperapp.h)("i", { "class": "fa fa-facebook-square", "aria-hidden": "true", style: "font-size:48px" })
            )
          ),
          (0, _hyperapp.h)(
            "li",
            null,
            (0, _hyperapp.h)(
              "a",
              { href: "https://twitter.com/", target: "new" },
              (0, _hyperapp.h)("i", { "class": "fa fa-twitter", "aria-hidden": "true", style: "font-size:48px" })
            )
          ),
          (0, _hyperapp.h)(
            "li",
            null,
            (0, _hyperapp.h)(
              "a",
              { href: "https://www.youtube.com/", target: "new" },
              (0, _hyperapp.h)("i", { "class": "fa fa-youtube", "aria-hidden": "true", style: "font-size:48px" })
            )
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "copyright" },
          "\xA9 2018 Copyright"
        )
      )
    )
  );
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _hyperapp = __webpack_require__(0);

function Header(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "header",
    null,
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "logo" },
        "Logo"
      ),
      (0, _hyperapp.h)(
        "nav",
        null,
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Menu"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Party Platters"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Locations"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Rewards"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reservations"
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OurStory;

var _hyperapp = __webpack_require__(0);

function OurStory(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { "class": "OurStory" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)(
            "h5",
            { "class": "comp-title" },
            "Our Story"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            "Cooking is the art of adjustment"
          ),
          (0, _hyperapp.h)(
            "p",
            null,
            "Lorem ipsum dolor amet master cleanse succulents viral retro single-origin coffee palo santo forage pug copper mug la croix gentrify. Shaman aesthetic cornhole fashion axe kickstarter banjo taiyaki retro wolf tousled echo park neutra VHS viral pinterest. Artisan art party YOLO retro portland. Kitsch disrupt cliche vape godard gluten-free, post-ironic schlitz poutine meggings typewriter. Af jean shorts etsy wolf raw denim fanny pack ramps hashtag freegan cardigan thundercats woke blue bottle."
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "quote" },
            (0, _hyperapp.h)(
              "i",
              null,
              " \"The best steak in the town of Huntington\""
            ),
            " - ",
            (0, _hyperapp.h)(
              "strong",
              null,
              "Thomas Eggsy"
            )
          ),
          (0, _hyperapp.h)(
            "a",
            { href: "#", "class": "reserve-btn" },
            "Reserve"
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)("div", { "class": "video-img", src: "" })
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RandomQuote;

var _hyperapp = __webpack_require__(0);

function RandomQuote(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'section',
    { 'class': 'randomQuote', style: { backgroundImage: 'linear-gradient(135deg, rgba(0, 0, 0, .2) 0, #000 100%), url("https://static01.nyt.com/images/2017/09/27/dining/27INSTAPOT1/27INSTAPOT1-superJumbo.jpg")'
      } },
    (0, _hyperapp.h)(
      'div',
      { 'class': 'container' },
      (0, _hyperapp.h)(
        'h1',
        null,
        'I love cooking for my self and I love cooking for my family'
      ),
      (0, _hyperapp.h)(
        'span',
        null,
        '- Al Roker -'
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Reviews;

var _hyperapp = __webpack_require__(0);

function Reviews(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { "class": "Reviews" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)(
            "div",
            { "class": "img" },
            (0, _hyperapp.h)("img", { src: "/img/chef.jpg" })
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)(
            "div",
            { "class": "info" },
            (0, _hyperapp.h)(
              "h5",
              { "class": "comp-title" },
              "Reviews"
            ),
            (0, _hyperapp.h)(
              "h2",
              null,
              "The food masters say about us"
            ),
            (0, _hyperapp.h)(
              "h4",
              null,
              "Best restaurant that I used to experience"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              "For people who worry about the risk, health officials offer common-sense advice: Spend less time on cellphones, use a headset or speaker mode so that the phone is not pressed up against the head and avoid trying to make calls if the signal is weak."
            ),
            (0, _hyperapp.h)(
              "div",
              { "class": "author" },
              (0, _hyperapp.h)(
                "strong",
                null,
                "Joe Bastianich"
              ),
              " - Winner Master Chef 2016"
            ),
            (0, _hyperapp.h)(
              "div",
              { "class": "arrows" },
              (0, _hyperapp.h)("i", { "class": "fa fa-arrow-left", style: "font-size:24px" }),
              (0, _hyperapp.h)("i", null),
              (0, _hyperapp.h)("i", { "class": "fa fa-arrow-right", style: "font-size:24px" })
            )
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SpecialMenu;

var _hyperapp = __webpack_require__(0);

function SpecialMenu(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { "class": "SpecialMenu textureBG" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h5",
        { "class": "comp-title" },
        "Special Menu"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        "Delicious Flavor of Autumn"
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "row boxes" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4" },
          (0, _hyperapp.h)(
            "div",
            { "class": "box" },
            (0, _hyperapp.h)(
              "div",
              { "class": "box-img" },
              (0, _hyperapp.h)(
                "div",
                { "class": "price-circle" },
                "$25"
              )
            ),
            (0, _hyperapp.h)(
              "span",
              { "class": "title" },
              "Super BBQ Grill NO Smoke"
            ),
            (0, _hyperapp.h)(
              "p",
              { "class": "details" },
              "Fried eggs, Steak, baked potato or french fries, side of vegetables"
            )
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4" },
          (0, _hyperapp.h)(
            "div",
            { "class": "box" },
            (0, _hyperapp.h)(
              "div",
              { "class": "box-img" },
              (0, _hyperapp.h)(
                "div",
                { "class": "price-circle" },
                "$25"
              )
            ),
            (0, _hyperapp.h)(
              "span",
              { "class": "title" },
              "Super BBQ Grill NO Smoke"
            ),
            (0, _hyperapp.h)(
              "p",
              { "class": "details" },
              "Fried eggs, Steak, baked potato or french fries, side of vegetables"
            )
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4" },
          (0, _hyperapp.h)(
            "div",
            { "class": "box" },
            (0, _hyperapp.h)(
              "div",
              { "class": "box-img" },
              (0, _hyperapp.h)(
                "div",
                { "class": "price-circle" },
                "$25"
              )
            ),
            (0, _hyperapp.h)(
              "span",
              { "class": "title" },
              "Super BBQ Grill NO Smoke"
            ),
            (0, _hyperapp.h)(
              "p",
              { "class": "details" },
              "Fried eggs, Steak, baked potato or french fries, side of vegetables"
            )
          )
        )
      ),
      (0, _hyperapp.h)(
        "a",
        { href: "#", "class": "link" },
        "View Full Menu"
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TopImg;

var _hyperapp = __webpack_require__(0);

function TopImg(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { "class": "TopImg" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "title" },
        (0, _hyperapp.h)(
          "h5",
          null,
          "Willkommen"
        ),
        (0, _hyperapp.h)(
          "h1",
          null,
          "Prime Beef Steak",
          (0, _hyperapp.h)("br", null),
          "Restaurant"
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "contact-info" },
        (0, _hyperapp.h)(
          "div",
          { "class": "container" },
          (0, _hyperapp.h)(
            "div",
            { "class": "booking" },
            "Book Table Directly"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            "(555)555 5555"
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "hours" },
            "Opening Hours: ",
            (0, _hyperapp.h)(
              "strong",
              null,
              " Mon - Fri:"
            ),
            " 9am - 9pm",
            (0, _hyperapp.h)(
              "strong",
              null,
              " / Weekend: "
            ),
            " 9am - 11pm"
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hyperapp = __webpack_require__(0);

var _hyperappReduxDevtools = __webpack_require__(12);

var _hyperappReduxDevtools2 = _interopRequireDefault(_hyperappReduxDevtools);

var _actions = __webpack_require__(9);

var _globalState = __webpack_require__(11);

var _App = __webpack_require__(10);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _hyperapp.app)({
  state: { globalState: _globalState.globalState },
  view: function view(state, actions) {
    return (0, _hyperapp.h)(_App2.default, { state: state, actions: actions });
  },
  root: document.getElementById('app'),
  actions: _actions.actions,
  events: {
    action: function action(state, actions, _ref) {
      var name = _ref.name,
          data = _ref.data;

      console.group("Action Info");
      console.log("Name:", name);
      console.log("Data:", data);
      console.groupEnd();
    },
    load: function load(state, actions) {
      actions.intro();
    }
  },
  mixins: [(0, _hyperappReduxDevtools2.default)()]
});

/***/ })
],[21]);