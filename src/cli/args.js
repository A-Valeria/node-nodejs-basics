const parseArgs = () => {
  const args = process.argv.reduce((acc, value, index, array) => {
    if (value.startsWith('--')) {
      const nextValue = array[index + 1];
      acc.push(`${value.replace('--', '')} is ${nextValue}`);
    }

    return acc;
  }, []);

  console.log(args.join(', '));
};

parseArgs();
