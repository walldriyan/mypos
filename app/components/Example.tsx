"use client";
import * as Dialog from "@radix-ui/react-dialog";

export default function Example() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="px-4 py-2 bg-blue-600 text-white rounded">
        Open Dialog
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40" />
        <Dialog.Content className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white p-6 rounded shadow">
          <Dialog.Title className="font-bold text-lg">Hello Radix!</Dialog.Title>
          <Dialog.Description>This is a Radix UI dialog box.</Dialog.Description>
          <Dialog.Close className="mt-4 px-3 py-1 bg-gray-200 rounded">
            Close
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
