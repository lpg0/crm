import Button from "@components/shared/Button"

const DeleteBoardModal = ({onConfirm, onClose}) => {
  return (
    <div className="w-[480px] min-w-11/12 mx-auto rounded-md p-6 bg-white dark:bg-darkGrey md:p-8">
        <h1 className="text-mainRed heading-lg">Delete this board?</h1>
        <p className="body-lg">Are you sure you want to delete the ‘Platform Launch’ board? This action will remove all columns and tasks and cannot be reversed.</p>
        <div className="flex">

        <button className="bg-mainRed text-white text-base rounded-full p-2 transition duration-200 hover:bg-mainRedHover" onClick={onConfirm}>
            Delete
        </button>
        <button className="bg-mainPurple bg-opacity-10 text-mainPurple text-base rounded-full p-2 transition duration-200 hover:bg-opacity-25 dark:bg-opacity-100 dark:bg-white" onClick={onClose}>
            Cancel
        </button>
        </div>
    </div>
  )
}
export default DeleteBoardModal