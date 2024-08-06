import React, { ChangeEvent } from 'react';
import './styles.scss';

interface MealInputCellProps {
  date: Date;
  mealType: string;
  value: string;
  onChange: (date: Date, mealType: string, event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const MealInputCell: React.FC<MealInputCellProps> = ({ date, mealType, value, onChange }) => {
  return (
    <div>
      <strong>{mealType}</strong>
      <textarea
        rows={3}
        className='textarea'
        value={value}
        onChange={(event) => onChange(date, mealType, event)}
      />
    </div>
  );
};

export default MealInputCell;
