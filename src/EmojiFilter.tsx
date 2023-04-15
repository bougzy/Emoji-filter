import React, { useState } from "react";
import { Picker, EmojiData } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

const EmojiFilter: React.FC = () => {
  const [selectedEmoji, setSelectedEmoji] = useState<EmojiData | null>(null);

  const handleEmojiSelect = (emoji: EmojiData) => {
    setSelectedEmoji(emoji);
  };

  return (
    <div>
      <h1>Emoji Filter</h1>
      <Picker onSelect={handleEmojiSelect} />
      {selectedEmoji && (
        <div>
          <h2>Selected Emoji:</h2>
          <span>{selectedEmoji.native}</span>
        </div>
      )}
    </div>
  );
};

export default EmojiFilter;
