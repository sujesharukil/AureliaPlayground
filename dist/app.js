System.register([], function (_export) {
  "use strict";

  var _prototypeProperties, _classCallCheck, App;
  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      App = _export("App", (function () {
        function App() {
          _classCallCheck(this, App);

          this.heading = "Aurelia Experiments";
          this.firstName = "Sujesh";
          this.lastName = "Arukil";
        }

        _prototypeProperties(App, null, {
          fullName: {
            get: function () {
              return "" + this.firstName + " " + this.lastName;
            },
            configurable: true
          },
          welcome: {
            value: function welcome() {
              console.log("Hello " + this.firstName);
            },
            writable: true,
            configurable: true
          }
        });

        return App;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7NkNBQWEsR0FBRzs7Ozs7Ozs7QUFBSCxTQUFHO0FBRUQsaUJBRkYsR0FBRztnQ0FBSCxHQUFHOztBQUlSLGNBQUksQ0FBQyxPQUFPLEdBQUcscUJBQXFCLENBQUM7QUFDckMsY0FBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7QUFDMUIsY0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7U0FDNUI7OzZCQVBRLEdBQUc7QUFTUixrQkFBUTtpQkFBQSxZQUFFO0FBQ1YsMEJBQVUsSUFBSSxDQUFDLFNBQVMsU0FBSSxJQUFJLENBQUMsUUFBUSxDQUFHO2FBQy9DOzs7QUFFRCxpQkFBTzttQkFBQSxtQkFBRTtBQUNMLHFCQUFPLENBQUMsR0FBRyxZQUFVLElBQUksQ0FBQyxTQUFTLENBQUcsQ0FBQzthQUMxQzs7Ozs7O2VBZlEsR0FBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==