import React from "react";

const DeliveryAndReturns = () => {
  return (
    <div className="px-20 pt-20">
      <div>
        <h2 className="text-3xl font-bold">Delivery & Returns</h2>
        <div className="pt-4">
          <h3 className="uppercase pb-4 font-bold">Delivery</h3>
          <p className="font-light">
            We endeavor to dispatch all our orders within 2 Working Days from
            Devon, UK via Royal Mail. Please allow a little longer during busy
            periods.
          </p>
        </div>
        <div className="pt-8">
          <h3 className="uppercase pb-2 font-bold">UK</h3>
          <p className="font-semibold">
            1st Class Tracking Royal Mail &nbsp;
            <span className="text-sm">&#40;usually 1-2 Days &#41; </span>
          </p>
          <p className="pt-2 font-light">
            Orders under £40.00 | <span className="font-bold">£4.00</span>
          </p>
          <p className="pt-2 font-light">
            Orders over £40.00 | <span className="font-bold">Free</span>
          </p>
        </div>
        <div className="pt-8">
          <p className="font-semibold">Europe &nbsp;</p>
          <p className="pt-2 font-light">
            Standard: 5-7 Days | <span className="font-bold">£7.50</span>
          </p>
        </div>
        <div className="pt-8">
          <p className="font-semibold">International &nbsp;</p>
          <p className="pt-2 font-light">
            Internation Standard: 5-7 Days |{" "}
            <span className="font-bold">£15.95</span>
          </p>
        </div>
        <div className="pt-12">
          <h2 className="font-semibold pb-2">Charges</h2>
          <h3>
            **The package may be subject to taxes, fees, customs duty, levies or
            other changes as a result of local legislation or customs once the
            package reaches its destination. Any such additional charges must be
            borne by the recipient. We are afraid we have no control over and
            cannot take responsibility for local customs charges. You may want
            to contact your local customs office for further information.{" "}
          </h3>
          <h3 className="font-bold pt-2">
            Please note you are responsible for any customs charges related to
            your shipment if these apply.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default DeliveryAndReturns;
