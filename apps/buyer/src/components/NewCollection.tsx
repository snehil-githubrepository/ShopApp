import React from "react";
import NewCollectionItem from "ui/components/NewCollectionItem";

interface NewCollectionProps {
  items: {
    name: string;
    price: number;
    image: string;
  }[];
}

const NewCollection: React.FC<NewCollectionProps> = ({ items }) => {
  return (
    <div>
      <div className="flex ">
        {items.map((item, index) => (
          <div key={index} className="inline-block mx-2">
            <NewCollectionItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewCollection;
