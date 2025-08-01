import React from 'react';
import Slot from './Slot';

const FeatureOne = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center w-full p-10 gap-5 items-center">
      <div className="text-left flex-3/5 px-4 flex gap-3 flex-col">
        <h3 className="text-xs font-bold tracking-wider text-blue-500">{"Auto-Categorization".toLocaleUpperCase()}</h3>
        <p className="text-black">
          Transactions are automatically categorized and reconciled accurately in real-time.
        </p>
      </div>

      <div className="flex-3/5 shadow-lg rounded-2xl bg-slate-100 overflow-hidden divide-y  divide-gray-200 ">
        <Slot time="1m" name="Slack" industry="Software" amount="-$25" id={1} />
        <Slot time="1m" name="DoorDash" industry="Food" amount="-$50" id={2} />
        <Slot time="Just now" name="Airbnb" industry="Hotel" amount="-$200" id={3} />
        <Slot time="Just now" name="Ycombinator" industry="SAFE" amount="$500,000" id={4} />
        <Slot time="Just now" name="Stripe" industry="Revenue" amount="$15,000" id={5} />
      </div>
    </div>
  );
};

export default FeatureOne;
