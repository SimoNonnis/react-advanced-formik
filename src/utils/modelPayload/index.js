import forIn from 'lodash/forIn';
import trim from 'lodash/trim';

function modelPayload(obj) {
  const newObj = {};

  forIn(obj, (value, key) => {
    switch (value) {
      case '':
      case null:
        newObj[key] = null;
        break;
      case true:
        newObj[key] = true;
        break;
      case false:
        newObj[key] = false;
        break;
      case 'true':
        newObj[key] = true;
        break;
      case 'false':
        newObj[key] = false;
        break;
      default:
        newObj[key] = trim(value);
    }
  });

  delete newObj.primary;
  delete newObj.living_at_the_property_you_are_selling_for_at_least_twelve_months;

  return newObj;
}

export default modelPayload;
