// ==UserScript==
// @name        Scratch Block Icons
// @namespace   Violentmonkey Scripts
// @match       *://scratch.mit.edu/*
// @match       *://projects.raspberrypi.org/en/projects/*
// @grant       none
// @version     1.0
// @author      David Fraser <david@frasergo.org>
// @description Adds icons to scratch coding blocks to make it easier to use for younger users
// @runat       document-idle
// ==/UserScript==

(function() {
    'use strict';

    var icons = {
      // Motion
      'move': '👣',
      'go to': '🗺️',
      // dropdown: random position | mouse-pointer
      'go to x:': '📍',
      'glide': '🐦',
      'point in direction': '🧭',
      'point towards': '🧭',
      'change x by': '↔️',
      'set x to': '↔️',
      'change y by': '↕️',
      'set y to': '↕️',
      'if on edge, bounce': '🪞',
      'set rotation style': '♻️',
      // dropdown: left-right | don't rotate | all around
      'x position': '↔️',
      'y position': '↕️',
      'direction': '🧭',
      // Looks
      'say': '💬',
      'think': '💭',
      'switch costume to': '👕',
      'next costume': '👕',
      'switch backdrop to': '🌇',
      'next backdrop': '🌇',
      'change size by': '💗',
      'set size to': '💗',
      'change': '🎨', // for looks
      // dropdown: color | fisheye | whirl | pixelate | mosaic | brightness | ghost
      'set': '🎨', // for looks
      'clear graphic effects': '🏳️',
      'show': '👁️',
      'hide': '🙈',
      // 'go to': '', // this is for layers
      // dropdown: front | back
      'costume': '👕',
      // dropdown: number | name
      'backdrop': '🌇',
      'size': '💗',
      // Sound
      'play sound': '▶️',
      'start sound': '🎵',
      'stop all sounds': '⏹️',
      // change [] effect by
      // set [] effect by
      // dropdown: pitch | pan left/right
      'clear sound effects': '🔕',
      'change volume by': '🔊',
      'set volume to': '🔊',
      'volume': '🔊',
      // Events
      'key pressed': '⌨️', // when
      // dropdown: space | up arrow | down arrow | right arrow | left arrow | any | ...
      'when this sprite clicked': '🖱️',
      'when backdrop switches to': '🌇',
      // 'when' - sounds
      // dropdown: loudness | timer
      'when I receive': '📨',
      'broadcast': '✉️',
      'and wait': '⏳', // after broadcast
      // Control
      'wait': '⏳',
      'repeat': '🔂',
      'forever': '🔂',
      'if': '✔️',
      'else': '❌',
      'wait until': '🚏',
      'repeat until': '🔄',
      'stop': '🛑',
      'when I start as a clone': '🆕',
      'create clone of': '🖇️',
      // dropdown: myself | ...
      'delete this clone': '🗑️',
      // Sensing
      'touching': '☝️',
      // dropdown: mouse-pointer | edge
      'touching color': '🎨',
      'is touching': '☝️',
      'distance to': '📏',
      'ask': '💬',
      'answer': '🗨️',
      'key': '⌨️',
      'mouse down?': '🖱️',
      'mouse x': '🖱️',
      'mouse y': '🖱️',
      'set drag mode': '🛒',
      // dropdown : draggable | not draggable
      'loudness': '🔉',
      'timer': '⏳',
      'reset timer': '⌛',
      // 'backdrop # of Stage
      'current': '📅', // year | month | date | day of week | hour | minute | second
      'days since 2000': '📆',
      'username': '📛',
      // Operators
      // + - * / don't need
      'pick random': '🎰',
      // < > = don't need
      'and': '👋🏽',
      'or': '🛶',
      'not': '🪢',
      'join': '➿',
      'letter': '🔤',
      'length of': '📏',
      'contains': '🪣',
      'mod': '🕙',
      'round': '🥄',
      // abs | floor | ceiling | sqrt | sin | cos | tan | asin | acos | atan | ln | log | e ^ | 10 ^
      // Variables
      'Make a Variable': '✏️',
      'my variable': '',
      // 'set': done above
      // 'change': done above
      'show variable': '💬',
      'hide variable': '💭',
      'Make a List': '📝',
      // My Blocks
      'Make a Block': '👨‍💻',
    }
    setInterval(function() {
        var textblocks = document.querySelectorAll("text.blocklyText")
        textblocks.forEach(textblock => {
          var text = textblock.textContent.replace(/ /g, ' ')
          if (text[0] == 'w') console.log("Found", JSON.stringify(text));
          if (icons[text] !== undefined) {
            console.log("Found icon", icons[text], "in", textblock.textContent)
            textblock.textContent = icons[text] + text
          }
      })
        var textblocks = document.querySelectorAll("text.sb3-label")
        textblocks.forEach(textblock => {
          var text = textblock.textContent.replace(/ /g, ' ')
          if (text[0] == 'w') console.log("Found", JSON.stringify(text));
          if (icons[text] !== undefined) {
            console.log("Found icon", icons[text], "in", textblock.textContent)
            textblock.textContent = icons[text] + text
          }
      })

    }, 2000)
})();
