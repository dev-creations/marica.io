import { useState } from "react";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import {
  Bold as BoldIcon,
  Italic as ItalicIcon,
  Underline as UnderlineIcon,
  Strikethrough as StrikethroughIcon,
  Redo as RedoIcon,
  Undo as UndoIcon,
} from "lucide-react";
import {
  type Editor,
  EditorContent,
  type JSONContent,
  useEditor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

function MenuBar({ editor }: { editor: Editor | null }) {
  if (!editor) {
    return null;
  }

  return (
    <div className="mio-shadow-md mio-mb-8 mio-flex mio-items-center mio-rounded-md mio-bg-white mio-p-2">
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        data-active={editor.isActive("bold") ? "true" : ""}
        className="mio-flex mio-items-center mio-justify-center hover:mio-bg-grey-7 focus:mio-outline-gray-400 data-[active='true']:mio-bg-gray-400 data-[active='true']:mio-text-gray-700 mio-size-8 focus:mio-outline [font-variant:small-caps]"
      >
        <BoldIcon className="mio-h-4 mio-w-4" />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        data-active={editor.isActive("italic") ? "true" : ""}
        className="mio-flex mio-items-center mio-justify-center hover:mio-bg-grey-7 focus:mio-outline-gray-400 data-[active='true']:mio-bg-gray-400 data-[active='true']:mio-text-gray-700 mio-size-8 focus:mio-outline [font-variant:small-caps]"
      >
        <ItalicIcon className="mio-h-4 mio-w-4" />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        data-active={editor.isActive("strike") ? "true" : ""}
        className="mio-flex mio-items-center mio-justify-center hover:mio-bg-grey-7 focus:mio-outline-gray-400 data-[active='true']:mio-bg-gray-400 data-[active='true']:mio-text-gray-700 mio-size-8 focus:mio-outline [font-variant:small-caps]"
      >
        <StrikethroughIcon className="mio-h-4 mio-w-4" />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        disabled={!editor.can().chain().focus().toggleUnderline().run()}
        data-active={editor.isActive("underline") ? "true" : ""}
        className="mio-flex mio-items-center mio-justify-center hover:mio-bg-grey-7 focus:mio-outline-gray-400 data-[active='true']:mio-bg-gray-400 data-[active='true']:mio-text-gray-700 mio-size-8 focus:mio-outline [font-variant:small-caps]"
      >
        <UnderlineIcon className="mio-h-4 mio-w-4" />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        aria-label="undo"
        className="mio-flex mio-items-center mio-justify-center hover:mio-bg-grey-7 focus:mio-outline-gray-400 data-[active='true']:mio-bg-gray-400 data-[active='true']:mio-text-gray-700 mio-size-8 focus:mio-outline [font-variant:small-caps]"
      >
        <UndoIcon className="mio-h-4 mio-w-4" />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        aria-label="redo"
        className="mio-flex mio-items-center mio-justify-center hover:mio-bg-grey-7 focus:mio-outline-gray-400 data-[active='true']:mio-bg-gray-400 data-[active='true']:mio-text-gray-700 mio-size-8 focus:mio-outline [font-variant:small-caps]"
      >
        <RedoIcon className="mio-h-4 mio-w-4" />
      </button>
    </div>
  );
}

function RichText({
  placeholder,
  value = "",
  onChange,
  required,
}: {
  placeholder?: string;
  value?: string;
  required?: boolean;
  onChange?: (props: { target: { value: JSONContent } }) => void;
}) {
  const [currentValue, setCurrentValue] = useState("");
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Placeholder.configure({
        emptyEditorClass: "is-editor-empty",
        placeholder,
      }),
    ],
    content: value,
    onUpdate: (p) => {
      setCurrentValue(p.editor.getText());
      onChange?.({
        target: {
          value: p.editor.getJSON(),
        },
      });
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <>
      <input
        value={currentValue}
        className="mio-hidden"
        required={required}
        readOnly
      />
      <MenuBar editor={editor} />
      <EditorContent
        className="[&>*]:mio-shadow-md focus-within:[&>*]:mio-outline-gray-400 [&>*]:mio-max-h-[200px] [&>*]:mio-min-h-[100px] [&>*]:mio-w-full [&>*]:mio-min-w-[200px] [&>*]:mio-max-w-full [&>*]:mio-overflow-y-scroll [&>*]:mio-rounded-md [&>*]:mio-bg-white focus-within:[&>*]:mio-outline [&>div]:mio-p-4 [&_*]:mio-outline-none"
        editor={editor}
      />
      {/* <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu> */}
      {/* <BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu> */}
    </>
  );
}

export { RichText };
