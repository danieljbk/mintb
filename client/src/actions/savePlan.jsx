import axios from 'axios';

const savePlan = async (dateValue) => {
  const serverUrl = 'https://mintb.herokuapp.com/plan/';
  // const serverUrl = 'http://localhost:3001/plan/';

  const timeBox = [];

  for (let time = 5; time <= 11; time++) {
    timeBox.push(document.getElementById(time + 'am').value);
  }
  for (let time = 0; time <= 12; time++) {
    timeBox.push(
      document.getElementById((time === 0 ? 12 : time) + 'pm').value
    );
  }

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
          document.getElementById('goalOne').value,
          document.getElementById('goalTwo').value,
          document.getElementById('goalThree').value,
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
