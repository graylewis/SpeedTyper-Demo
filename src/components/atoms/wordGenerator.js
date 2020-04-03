import wordlist from '../../wordlists/common.json';

function wordGenerator(n) {
  const output = [];
  for (let i=0; i<n; i++) {
    let toPush = wordlist[Math.floor(Math.random() * wordlist.length)]
    output.push(toPush)
    output.push(' ')
  }
  return output
}

export default wordGenerator;

