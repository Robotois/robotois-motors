const Motors = require('../index.js');

const motors = new Motors();

motors.motor1PWM(50);

setTimeout(() => {
  motors.motor1Stop();
  motors.release();
}, 5000);
