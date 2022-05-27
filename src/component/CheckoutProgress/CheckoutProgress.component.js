import { PureComponent } from "react";
import "./CheckoutProgress.scss";
import { useLocation } from "react-router-dom";

class CheckoutProgress extends PureComponent {
  render() {
    const { steps, location } = this.props
    const keys = Object.keys(steps)
    let activeUrl;
    keys.forEach((k, idx) => {
      if (location.pathname.includes(steps[k].url)) {
        activeUrl = idx
      }
    })
    return (
      <div block="CheckoutProgress">
        <div className="checkout-progress">
          <div className="progress-bar">
            {keys.length > 0 &&
              (keys.map((key, idx) => {
                if (keys.length !== idx + 1) {
                  return (
                    <Steps key={key.url} {...steps[key]} step={idx + 1} location={location} active={idx <= activeUrl} completed={idx < activeUrl} />
                  )
                } else {
                  return <div className={`bar ${idx === activeUrl ? "active" : ""}`}></div>
                }
              }))
            }
          </div>
        </div >
      </div >
    );
  }
}

export default withRouter(CheckoutProgress);


export class Steps extends PureComponent {
  render() {
    const { active, completed, title, step } = this.props
    return (
      <>
        <div className={`bar ${active ? "active" : ""}`}></div>
        <div className={`step ${active ? "active" : ""}`}>
          <div className="bullet">
            {completed ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" /></svg> : <span>{step}</span>}
          </div>
          <p>{title}</p>
        </div>
      </>
    )
  }
}


export function withRouter(Child) {
  return (props) => {
    const location = useLocation();
    return <Child {...props} location={location} />;
  };
}

