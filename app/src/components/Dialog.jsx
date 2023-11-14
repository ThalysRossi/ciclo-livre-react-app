import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function Modal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md px-4 py-2 text-sm font-medium text-clRed underline underline-offset-1"
        >
          Clique aqui e saiba mais
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full transform overflow-hidden rounded-2xl bg-clGrey p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h1"
                    className="text-3x1 font-semibold leading-6 text-clRed"
                  >
                    A pobreza menstrual é uma realidade global
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm">
                      que afeta milhões de mulheres e meninas em todo o mundo.
                      Caracterizada pela falta de recursos, infraestrutura
                      adequada, conhecimento sobre cuidados menstruais e
                      ocasionada, também, pelos tabus, essa questão crucial tem
                      implicações significativas em termos de saúde, educação e
                      igualdade de gênero.
                    </p>
                    <p className="text-sm pt-4">
                      Muitas meninas não têm informações básicas sobre como
                      funciona a menstruação, especialmente antes da sua
                      primeira menstruação. Por esse tabu em torno do assunto,
                      se tornam despreparadas e incapazes de pedir ajuda quando
                      necessário. A educação menstrual é essencial não apenas
                      para capacitar as jovens a compreenderem e gerenciarem
                      esse aspecto natural de suas vidas com dignidade e
                      confiança.
                    </p>
                    <h1 className="text-clRed font-semibold text-3x1 underline underline-offset-1">
                      A pobreza menstrual é resultado de séculos de tabu,
                      preconceito, ignorância, ausência de educação sexual e
                      machismo em torno da menstruação.
                    </h1>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-clRed px-4 py-2 text-sm font-medium text-clPink hover:bg-clPink hover:text-clRed focus:outline-none focus-visible:ring-2 focus-visible:ring-clRed focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Fechar
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
