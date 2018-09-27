import clock from 'clock';
import document from 'document';

const hourHand = document.getElementById('hours');
const minuteHand = document.getElementById('minutes');
const secondHand = document.getElementById('seconds');

// 短針を変更。分も加味して角度を変更する。
function hoursToAngle(hours, minutes) {
  const hourAngle = (360 / 12) * hours;
  const minAngle = (360 / 12 / 60) * minutes;
  return hourAngle + minAngle;
}

// 長針を変更。
function minutesToAngle(minutes) {
  return (360 / 60) * minutes;
}

// 秒針を変更。
function secondsToAngle(seconds) {
  return (360 / 60) * seconds;
}

// 時計の更新を行う
function updateClock(evt) {
  const today = evt.date;
  const hours = today.getHours() % 12;
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();

  hourHand.groupTransform.rotate.angle = hoursToAngle(hours, minutes);
  minuteHand.groupTransform.rotate.angle = minutesToAngle(minutes);
  secondHand.groupTransform.rotate.angle = secondsToAngle(seconds);
}

clock.granularity = 'seconds';
clock.ontick = evt => updateClock(evt);
