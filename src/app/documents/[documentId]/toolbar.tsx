"use client";

import { cn } from "@/lib/utils";
import { BoldIcon, ItalicIcon, LucideIcon, PrinterIcon, Redo2Icon, SpellCheckIcon, UnderlineIcon, Undo2Icon } from "lucide-react";
import { useEditorStore } from "@/store/use-editor-store";
import { Separator } from "@/components/ui/separator";


interface ToolbarButtonProps {
    onClick?: () => void;
    isActive?: boolean;
    icon: LucideIcon;
}

const ToolbarButton = ({ onClick, isActive, icon:Icon }: ToolbarButtonProps) => {
    return (
        <button onClick={onClick} className={cn("text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80", isActive && "bg-neutral-200/80")}>
            <Icon className="size-4"/>
        </button>
    );
}

export const Toolbar = () => {
    const { editor } = useEditorStore();

    console.log("Toolbar Editor: ", editor);

    const sections: {
        label: string;
        icon: LucideIcon;
        onClick?: () => void;
        isActive?: boolean;
    }[][] = [
        [
            {
                label: "Undo",
                icon: Undo2Icon,
                onClick: () => editor?.chain().focus().undo().run(),
            },
            {
                label: "Redo",
                icon: Redo2Icon,
                onClick: () => editor?.chain().focus().redo().run(),
            },
            {
                label: "Print",
                icon: PrinterIcon,
                onClick: () => window.print(),
            },
            {
                label: "Spell Check",
                icon: SpellCheckIcon,
                onClick: () => {
                    const current = editor?.view.dom.getAttribute("spellcheck");
                    editor?.view.dom.setAttribute("spellcheck", current === "false" ? "true" : "false")
                },
            }
        ],
        [
            {
                label: "Bold",
                icon: BoldIcon,
                isActive: editor?.isActive("bold"),
                onClick: () => editor?.chain().focus().toggleBold().run(),
            },
            {
                label: "Italic",
                icon: ItalicIcon,
                onClick: () => editor?.chain().focus().toggleItalic().run(),
                isActive: editor?.isActive("italic"),
            },
            {
                label: "Underline",
                icon: UnderlineIcon,
                onClick: () => editor?.chain().focus().toggleUnderline().run(),
            },
          ],
    ];
    return (
        <div className="bg-[#F1F4F9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center justify-between gap-x-0.5 overflow-x-auto">
            {
                sections[0].map((item) => (<ToolbarButton key={item.label} {...item}/>))
            }
            <Separator orientation="vertical" className="h-6 bg-neutral-300" />
            {
                sections[1].map((item) => (<ToolbarButton key={item.label} {...item}/>))
            }

            <Separator orientation="vertical" className="h-6 bg-neutral-300" />

            <Separator orientation="vertical" className="h-6 bg-neutral-300" />

            <Separator orientation="vertical" className="h-6 bg-neutral-300" />

        </div>
    )
};