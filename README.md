# Timer

## Goal
- Create an alarm clock / timer which will beep after a specified amount of time has passed. 
- The user can specify an unlimited number of alarms using command line arguments.

## Example

```bash
node timer1.js 10 3 5 15 9
```
Results in beeping at the following times:

- 3 seconds
- 5 seconds
- 9 seconds
- 10 seconds
- 15 seconds

## Hints

Can use `process.stdout.write('\x07');` to beep.