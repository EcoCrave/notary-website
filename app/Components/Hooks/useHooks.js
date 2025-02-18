import React, { useState } from "react";

const useHooks = () => {
  const [canOpen, setCanOpen] = useState(false);
  return { setCanOpen, canOpen };
};

export default useHooks;
