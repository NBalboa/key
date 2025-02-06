const Letter = ({ pageNo }: { pageNo: number }) => {
  return (
    <div className={`${pageNo === 2 ? "block" : "hidden"} space-y-3`}>
      <h1 className="font-bold text-2xl">Letter:</h1>
      <p>Hi Key,</p>
      <p>Good day!</p>
      <p className="text-justify">
        I hope this message finds you well, I just want to let you know that I'm
        so hella in love with you genuinely. I'm fully committed with my
        feelings about you. Please do take care and be safe always. I I I I I I
        loveee youu sooo muchhh my love Key Mejado.
      </p>
      <p>
        Yours truly,
        <span className="block">Nicko Balboa</span>
      </p>
    </div>
  );
};

export default Letter;
