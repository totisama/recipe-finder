import { LETTERS } from '../const'

interface LetterProps {
  changeLetter: (letter: string) => void
}

export function Letters({ changeLetter }: LetterProps) {
  return (
    <div className='hidden p-5 sm:flex sm:justify-center'>
      {LETTERS.map((letter, index) => (
        <div
          className='ml-1 flex select-none gap-1 text-lg md:ml-[6px] md:gap-[6px] lg:ml-2 lg:gap-2'
          key={index}
        >
          <button
            className='text-bold text-[#bd690f]'
            key={letter}
            onClick={() => {
              changeLetter(letter)
            }}
          >
            {letter}
          </button>
          {index < LETTERS.length - 1 && <span className='text-black'>/</span>}
        </div>
      ))}
    </div>
  )
}
