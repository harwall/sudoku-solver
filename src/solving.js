function Solver(sudokuTable) {

  console.log('sudokuTable', sudokuTable)
  let workingTable = JSON.parse(JSON.stringify(sudokuTable));

  let workingSubTable1 = [];
  let workingSubTable2 = [];
  let workingSubTable3 = [];
  let workingSubTable4 = [];
  let workingSubTable5 = [];
  let workingSubTable6 = [];
  let workingSubTable7 = [];
  let workingSubTable8 = [];
  let workingSubTable9 = [];

  const allWorkingSubTables = [workingSubTable1, workingSubTable2, workingSubTable3, workingSubTable4, workingSubTable5, workingSubTable6, workingSubTable7, workingSubTable8, workingSubTable9];

  let basicSolvingBlocked = false
  let advancedSolvingBlocked = false
  let iterationsNumber = 0

  const createWorkingSubTables = array => {
    workingSubTable1 = [];
    workingSubTable2 = [];
    workingSubTable3 = [];
    workingSubTable4 = [];
    workingSubTable5 = [];
    workingSubTable6 = [];
    workingSubTable7 = [];
    workingSubTable8 = [];
    workingSubTable9 = [];
    for (let i = 0; i < array.length; i++) {
      const line = array[i]
      if (i < 3) {
        for (let y = 0; y < line.length; y++) {
          if (Array.isArray(line[y]) === false) {
            if (y < 3) {
              workingSubTable1.push(line[y])
            }
            else if (y > 2 && y < 6) {
              workingSubTable2.push(line[y])
            }
            else if (y > 5 && y < 9) {
              workingSubTable3.push(line[y])
            }
          }
        }
      } else if (i > 2 && i < 6) {
        for (let y = 0; y < line.length; y++) {
          if (Array.isArray(line[y]) === false) {
            if (y < 3) {
              workingSubTable4.push(line[y])
            }
            else if (y > 2 && y < 6) {
              workingSubTable5.push(line[y])
            }
            else if (y > 5 && y < 9) {
              workingSubTable6.push(line[y])
            }
          }
        }
      } else if (i > 5 && i < 9) {
        for (let y = 0; y < line.length; y++) {
          if (Array.isArray(line[y]) === false) {
            if (y < 3) {
              workingSubTable7.push(line[y])
            }
            else if (y > 2 && y < 6) {
              workingSubTable8.push(line[y])
            }
            else if (y > 5 && y < 9) {
              workingSubTable9.push(line[y])
            }
          }
        }
      }
    }
  }

  const assignPlausibleNumbers = array => {
    console.log('tata', array)
    createWorkingSubTables(array)

    /* Iteration on each lines of the sudoku */
    for (let i = 0; i < array.length; i++) {
      let line = array[i]
      let plausibleNumbersLine = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      /* Remove all numbers that are already in the line from the plausibleNumbersLine */
      for (let y = 0; y < line.length; y++) {
        if (line[y] !== 0 && Array.isArray(line[y]) === false) {
          const number = line[y]
          const index = plausibleNumbersLine.indexOf(number);
          if (index > -1) {
            plausibleNumbersLine.splice(index, 1);
          }
        }
      }

      /* iteration on every boxes of the current line */
      for (let y = 0; y < line.length; y++) {
        /* if there is no unique number in the box */
        if (line[y] === 0 || Array.isArray(line[y]) === true) {
          /* Remove all numbers that are already in plausibleNumbersLine from plausibleNumbersLineColumn */
          let plausibleNumbersLineColumn = JSON.parse(JSON.stringify(plausibleNumbersLine));
          for (let z = 0; z < array.length; z++) {
            console.log('workingTable', workingTable)
            const element = workingTable[z]
            const index = plausibleNumbersLineColumn.indexOf(element[y]);
            if (index > -1) {
              plausibleNumbersLineColumn.splice(index, 1);
            }
          }

          let plausibleNumbersLineColumnSubTable = JSON.parse(JSON.stringify(plausibleNumbersLineColumn));

          if (y === 0 || y === 1 ||y === 2) {
            if (array.indexOf(line) === 0 || array.indexOf(line) === 1 || array.indexOf(line) === 2) {
              for (let z = 0; z < workingSubTable1.length; z++) {
                const element = workingSubTable1[z]
                const index = plausibleNumbersLineColumnSubTable.indexOf(element);
                if (index > -1) {
                  plausibleNumbersLineColumnSubTable.splice(index, 1);
                }
              }
            } else if (array.indexOf(line) === 3 || array.indexOf(line) === 4 || array.indexOf(line) === 5) {
              for (let z = 0; z < workingSubTable4.length; z++) {
                const element = workingSubTable4[z]
                const index = plausibleNumbersLineColumnSubTable.indexOf(element);
                if (index > -1) {
                  plausibleNumbersLineColumnSubTable.splice(index, 1);
                }
              }
            } else if (array.indexOf(line) === 6 || array.indexOf(line) === 7 || array.indexOf(line) === 8) {
              for (let z = 0; z < workingSubTable7.length; z++) {
                const element = workingSubTable7[z]
                const index = plausibleNumbersLineColumnSubTable.indexOf(element);
                if (index > -1) {
                  plausibleNumbersLineColumnSubTable.splice(index, 1);
                }
              }
            }
          } else if (y === 3 || y === 4 ||y === 5) {
            if (array.indexOf(line) === 0 || array.indexOf(line) === 1 || array.indexOf(line) === 2) {
              for (let z = 0; z < workingSubTable2.length; z++) {
                const element = workingSubTable2[z]
                const index = plausibleNumbersLineColumnSubTable.indexOf(element);
                if (index > -1) {
                  plausibleNumbersLineColumnSubTable.splice(index, 1);
                }
              }
            } else if (array.indexOf(line) === 3 || array.indexOf(line) === 4 || array.indexOf(line) === 5) {
              for (let z = 0; z < workingSubTable5.length; z++) {
                const element = workingSubTable5[z]
                const index = plausibleNumbersLineColumnSubTable.indexOf(element);
                if (index > -1) {
                  plausibleNumbersLineColumnSubTable.splice(index, 1);
                }
              }
            } else if (array.indexOf(line) === 6 || array.indexOf(line) === 7 || array.indexOf(line) === 8) {
              for (let z = 0; z < workingSubTable8.length; z++) {
                const element = workingSubTable8[z]
                const index = plausibleNumbersLineColumnSubTable.indexOf(element);
                if (index > -1) {
                  plausibleNumbersLineColumnSubTable.splice(index, 1);
                }
              }
            }
          } else if (y === 6 || y === 7 ||y === 8) {
            if (array.indexOf(line) === 0 || array.indexOf(line) === 1 || array.indexOf(line) === 2) {
              for (let z = 0; z < workingSubTable3.length; z++) {
                const element = workingSubTable3[z]
                const index = plausibleNumbersLineColumnSubTable.indexOf(element);
                if (index > -1) {
                  plausibleNumbersLineColumnSubTable.splice(index, 1);
                }
              }
            } else if (array.indexOf(line) === 3 || array.indexOf(line) === 4 || array.indexOf(line) === 5) {
              for (let z = 0; z < workingSubTable6.length; z++) {
                const element = workingSubTable6[z]
                const index = plausibleNumbersLineColumnSubTable.indexOf(element);
                if (index > -1) {
                  plausibleNumbersLineColumnSubTable.splice(index, 1);
                }
              }
            } else if (array.indexOf(line) === 6 || array.indexOf(line) === 7 || array.indexOf(line) === 8) {
              for (let z = 0; z < workingSubTable9.length; z++) {
                const element = workingSubTable9[z]
                const index = plausibleNumbersLineColumnSubTable.indexOf(element);
                if (index > -1) {
                  plausibleNumbersLineColumnSubTable.splice(index, 1);
                }
              }
            }
          }
          line[y] = plausibleNumbersLineColumnSubTable
        }
      }
    }
  }

  const solveSoloPlausibeNumbers = array => {
    for (let i = 0; i < array.length; i++) {
      const line = array[i]
      for (let y = 0; y < line.length; y++) {
        const number = line[y]
        if (Array.isArray(number) === true && number.length === 1) {
          line[y] = number[0]
          basicSolvingBlocked = false
/*           advancedSolvingBlocked = false
 */        }
      }
    }
    solveSudoku(array)
  }










  const cleanNonPlausibleNumbers = array => {
    console.log('toto', array)
    createWorkingSubTables(array)

    console.log('allWorkingSubTables', allWorkingSubTables)
    for (let t = 0; t < allWorkingSubTables.length; t++) {
      const table = allWorkingSubTables[t];

      let subLine1 = []
      let subLine2 = []
      let subLine3 = []

      for (let i = 0; i < 2; i++) {
        const number = table[i];
        if (Array.isArray(number) === true ) {
          for (let n = 0; number.length; n++) {
            subLine1.push(number[n])
          }
        } else {
          subLine1.push(number)
        }
      }
      for (let i = 2; i < 5; i++) {
        const number = table[i];
        if (Array.isArray(number) === true ) {
          for (let n = 0; number.length; n++) {
            subLine2.push(number[n])
          }
        } else {
          subLine2.push(number)
        }
      }
      for (let i = 5; i < table.length; i++) {
        const number = table[i];
        if (Array.isArray(number) === true ) {
          for (let n = 0; number.length; n++) {
            subLine3.push(number[n])
          }
        } else {
          subLine3.push(number)
        }
      }
      console.log('subLine1', subLine1)
      console.log('subLine2', subLine2)
      console.log('subLine3', subLine3)
    }
    solveSudoku(array)
  }












  const solveSudoku = array => {
    if (basicSolvingBlocked === false) {
      basicSolvingBlocked = true
      iterationsNumber++
      assignPlausibleNumbers(array)
      solveSoloPlausibeNumbers(array)
    }
    else if (advancedSolvingBlocked === false){
      advancedSolvingBlocked = true
      cleanNonPlausibleNumbers(array)
    }
    else {
      let solutionMessage = ('solved after ' + iterationsNumber + ' iterations')
      for (let i = 0; i < array.length; i++) {
        const line = array[i]
        for (let y = 0; y < line.length; y++) {
          if (Array.isArray(line[y]) === false) {
            if (line[y] === 0) {
              solutionMessage = ('solving blocked after ' + iterationsNumber + ' iterations')
              console.log(solutionMessage)
              return
            }
          } else {
            solutionMessage = ('solving blocked after ' + iterationsNumber + ' iterations')
            console.log(solutionMessage)
            return
          }
        }
      }
      console.log(solutionMessage)
      return (
        workingTable
      )
    }

  }

  solveSudoku(workingTable)
  return (
    workingTable
  );
}

export default Solver;
