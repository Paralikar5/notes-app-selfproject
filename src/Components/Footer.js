import React from "react";

export default function Footer() {

  let footerStyle = {
    position: "relative",
    top: "25vh",
    width: "100%",
  }

  return (
    <div>
      <footer class="py-3 my-4 bg-dark text-light" style={footerStyle} >
        <ul class="nav justify-content-center border-bottom pb-4"></ul>
        <p class="text-center">© 2022 Todo_List, Inc</p>
      </footer>
    </div>
  );
}
