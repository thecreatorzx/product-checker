import React from "react";

const Docs = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="flex h-screen">
        <div className=" flex-auto w-1/4 h-screen">
          <div className=" px-5 py-2">
            <ul className=" list-none space-y-2 py-2">
              <li><h1 className=" text-gray-500 font-bold">GET STARTED</h1></li>
              <li onClick={() => scrollToSection("quick-start1")}>QUICK START 1</li>
              <li onClick={() => scrollToSection("quick-start2")}>QUICK START 2</li>
            </ul>
            <hr />
            <ul className=" list-none space-y-2 py-2">
              <li><h1 className=" text-gray-500 font-bold">GET STARTED</h1></li>
              <li onClick={() => scrollToSection("quick-start3")}>QUICK START</li>
              <li onClick={() => scrollToSection("quick-start4")}>QUICK START</li>
            </ul>
          </div>
        </div>
        <div className=" flex-auto w-3/4 h-screen overflow-y-auto pl-5 pr-28 py-16">
          <div id="quick-start1">
            <h1 className=" text-4xl font-bold py-2">quick start</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sed recusandae voluptatem qui quos ullam libero odit voluptates tempore repellat aliquam sunt, facilis voluptate cumque molestias accusamus ut quod magni eaque cupiditate non. Ipsum quis quaerat voluptate. Aliquid nostrum eveniet corporis harum voluptates ut aperiam id et totam atque fuga saepe, tempora eaque maxime velit veniam officia perferendis! Velit, doloribus facilis, excepturi aspernatur unde nobis, pariatur veritatis maxime quidem dolore sed sapiente? Pariatur, harum tenetur repellendus error ullam ipsa corporis suscipit voluptas quia sed consequuntur aspernatur quibusdam, iure adipisci atque porro illum facere perferendis ducimus, in obcaecati quam dolore doloremque!</p>
          </div>
          <div id="quick-start2">
            <h1 className=" text-4xl font-bold py-2">quick start</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sed recusandae voluptatem qui quos ullam libero odit voluptates tempore repellat aliquam sunt, facilis voluptate cumque molestias accusamus ut quod magni eaque cupiditate non. Ipsum quis quaerat voluptate. Aliquid nostrum eveniet corporis harum voluptates ut aperiam id et totam atque fuga saepe, tempora eaque maxime velit veniam officia perferendis! Velit, doloribus facilis, excepturi aspernatur unde nobis, pariatur veritatis maxime quidem dolore sed sapiente? Pariatur, harum tenetur repellendus error ullam ipsa corporis suscipit voluptas quia sed consequuntur aspernatur quibusdam, iure adipisci atque porro illum facere perferendis ducimus, in obcaecati quam dolore doloremque! </p>
          </div>
          <div id="quick-start3">
            <h1 className=" text-4xl font-bold py-2">quick start</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sed recusandae voluptatem qui quos ullam libero odit voluptates tempore repellat aliquam sunt, facilis voluptate cumque molestias accusamus ut quod magni eaque cupiditate non. Ipsum quis quaerat voluptate. Aliquid nostrum eveniet corporis harum voluptates ut aperiam id et totam atque fuga saepe, tempora eaque maxime velit veniam officia perferendis! Velit, doloribus facilis, excepturi aspernatur unde nobis, pariatur veritatis maxime quidem dolore sed sapiente? Pariatur, harum tenetur repellendus error ullam ipsa corporis suscipit voluptas quia sed consequuntur aspernatur quibusdam, iure adipisci atque porro illum facere perferendis ducimus, in obcaecati quam dolore doloremque!</p>
          </div>
          <div id="quick-start4">
            <h1 className=" text-4xl font-bold py-2">quick start</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sed recusandae voluptatem qui quos ullam libero odit voluptates tempore repellat aliquam sunt, facilis voluptate cumque molestias accusamus ut quod magni eaque cupiditate non. Ipsum quis quaerat voluptate. Aliquid nostrum eveniet corporis harum voluptates ut aperiam id et totam atque fuga saepe, tempora eaque maxime velit veniam officia perferendis! Velit, doloribus facilis, excepturi aspernatur unde nobis, pariatur veritatis maxime quidem dolore sed sapiente? Pariatur, harum tenetur repellendus error ullam ipsa corporis suscipit voluptas quia sed consequuntur aspernatur quibusdam, iure adipisci atque porro illum facere perferendis ducimus, in obcaecati quam dolore doloremque!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Docs;
