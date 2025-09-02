mergeInto(LibraryManager.library, {
  Login: function (userName) {
    window.dispatchReactUnityEvent("Login", UTF8ToString(userName));
  },
});
