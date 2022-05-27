import ContentWrapper from "Component/ContentWrapper";
import {Checkout as SourceCheckout} from "SourceRoute/Checkout/Checkout.component"
import CheckoutProgress from "../../component/CheckoutProgress/CheckoutProgress.component"
import "./Checkout.extend.scss"

class CheckoutComponent extends SourceCheckout{

    renderProgress() {

        return <CheckoutProgress steps={this.stepMap} />;
      }
    render() {
        return (
            <main block="Checkout">
                {this.renderProgress()}
                <ContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                >
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>
        );
    }
}

export default CheckoutComponent