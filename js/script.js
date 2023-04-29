import { Text, View } from "react-native";
import React, { Component } from "react";

export default class script extends Component {
  render() {
    return (
      <View>
        <Text>script</Text>
      </View>
    );
  }
}
// toggle class active
const navbNar = document.querySelector(".navbar-nav");

// menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbNar.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbNar.contains(e.target)) {
    navbNar.classList.remove("active");
  }
});
