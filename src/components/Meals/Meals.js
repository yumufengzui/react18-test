import Meal from './Meal/Meal'

const Meals = (props) => {
  const mealItem = props.mealsData.map(item=>{
    return <Meal item={item} key={item.id}></Meal>
  })
    return (
    <div>
      {mealItem}
    </div>
  );
};

export default Meals;