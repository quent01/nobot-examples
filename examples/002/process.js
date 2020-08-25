process.stdout.write(`Type something then hit enter : `);
process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if(chunk !== null){
        process.stdout.write(`You wrote : ${chunk}`);
        process.exit(0);
    }
});
process.on('exit', (code) => {
    console.log(`The process ${process.pid} has now finished, exiting with code : ${code}`);
});