# Timer1

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

# Timer2

## Goal

- The user can press `b` and it should beep right away
- The user can input any number from 1 to 9 and it should
    - immediately output "setting timer for x seconds...", where x is the number entered by the user
    - beep after that number of seconds has passed
- The user can use `ctrl` + `c` to exit the program, at which point the program should say "Thanks for using me, ciao!" before terminating