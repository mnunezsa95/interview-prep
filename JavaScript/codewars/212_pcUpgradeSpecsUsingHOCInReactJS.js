/* ---------------------------------------------------------------------------------------------- */
/*                              PC upgrade specs using HOC in ReactJS                             */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6 kyu

First steps to learning the basics of higher order components (HOC) in ReactJS

A HOC is a function that takes a component as the first parameter and returns a function wrapping the first parameter.

function withExample(Component) {
  return function(props) {
    return <Component />
  }
}
More about HOC: ReactJS docs.

If you complete this kata try Truncate paragraph using HOC in React JS.

Challenge
You're building a new feature on your e-commerce site which displays two computer specs - basic and pro.

- The PcDisplay component is already built and expects 5 props. { title, price, cpu, ram, ssd }
-Build a withPriceModel HOC and using that to manage the price of the BasicModel and ProModel components.
- Build a HOC called withPriceModel which takes the PcDisplay component for first param and price increase number for the second param.
- withPriceModel will manage the price and must set a default price of 50.
- BasicModel should use the default price set by withPriceModel
- ProModel should use withPriceModel to increase the price by 60. Total price should be 110.

Since the withPriceModel is responsible for managing the price, ensure that it can't be overritten by passing in a price prop.
*/

const React = require("react");

const PcDisplay = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p id="price">£{props.price}</p>
      <ul>
        <li>
          <label>CPU</label> <span>{props.cpu}</span>
        </li>
        <li>
          <label>RAM</label> <span>{props.ram}</span>
        </li>
        <li>
          <label>SSD</label> <span>{props.ssd}</span>
        </li>
      </ul>
    </div>
  );
};

let withPriceModel = (WrappedComponent, priceIncrease = 0) => {
  return (props) => {
    const startPrice = 50; // default price
    const newPrice = startPrice + priceIncrease; // calculate new price
    const newProps = { ...props, price: newPrice }; // Declare new props, price is newly calculated
    return <WrappedComponent {...newProps} />;
  };
};

// Build basic and pro model components using `withPriceModel`
const BasicModel = withPriceModel(PcDisplay, 0);
const ProModel = withPriceModel(PcDisplay, 60);

console.log(BasicModel);
console.log(ProModel);
