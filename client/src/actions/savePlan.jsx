import axios from 'axios';

const savePlan = async (dateValue) => {
  const serverUrl = 'https://mintb.herokuapp.com/api/plan/';
  // const serverUrl = 'http://localhost:3001/api/plan/';

  const timeBox = [];

  for (let time = 5; time <= 11; time++) {
    timeBox.push(document.getElementById(time + 'am').value);
  }
  for (let time = 0; time <= 11; time++) {
    timeBox.push(
      document.getElementById((time === 0 ? 12 : time) + 'pm').value
    );
  }
  timeBox.push(document.getElementById(12 + 'am').value);

  try {
    await axios.put(serverUrl, {
      date:
        dateValue.getFullYear() +
        '-' +
        (dateValue.getMonth() + 1) +
        '-' +
        dateValue.getDate(),
      content: {
        goals: [
          document.getElementById('goal-0').value,
          document.getElementById('goal-1').value,
          document.getElementById('goal-2').value,
        ],
        notes: document.getElementById('note').value,
        timeBox,
      },
    });
    return true;
  } catch (err) {
    return false;
  }
};

export default savePlan;
