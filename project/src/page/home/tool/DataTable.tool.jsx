import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import SweetAlert2 from "react-sweetalert2";
import Swal from "sweetalert2";
import { useDeleteContactMutation } from "../../../store/services/endpoints/contact.endpoint";
import { SheetTrigger } from "../../../components/ui/sheet";
import { toast } from "sonner";

const DataTableTool = ({ apiData, handleEdit }) => {
  const [swalProps, setSwalProps] = useState({});
  const [deleteFun, { data, isError, isLoading, isSuccess }] =
    useDeleteContactMutation();

  const handleDelete = (id) => {
    setSwalProps({
      show: true,
      title: "Are you sure!",
      text: "You want to remove?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6 ",
      confirmButtonText: "Yes, delete it!",
      onResolve: () => {
        setSwalProps({
          show: false,
        });
      },
      onConfirm: async () => {
        await deleteFun(id);
        setSwalProps({
          show: false,
        });
        toast.success("Deleted")
      },
    });
  };

  return (
    <div>
      <Table className="mt-5">
        <TableHeader>
          <TableRow className=" bg-basic text-white hover:bg-basic text-lg">
            <TableHead className=" rounded-s-lg">No</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-end">Phone</TableHead>
            <TableHead>Address</TableHead>
            <TableHead className=" rounded-r-lg">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {apiData.map((i) => (
            <TableRow key={i.id} className=" font-semibold bg-[#fcfcfd]">
              <TableCell>{i.id}</TableCell>
              <TableCell>{i.name}</TableCell>
              <TableCell className=" text-gray-400">{i.email}</TableCell>
              <TableCell className="text-end text-gray-400">
                {i.phone}
              </TableCell>
              <TableCell className=" text-gray-400 w-[300px] text-wrap">
                {i.address}
              </TableCell>
              <TableCell className="text-xl space-x-5">
                <SheetTrigger asChild>
                  <button
                    onClick={handleEdit.bind(null, i.id)}
                    className=" hover:scale-110 active:scale-95 duration-200"
                  >
                    <FaEdit />
                  </button>
                </SheetTrigger>
                <button
                  onClick={handleDelete.bind(null, i.id)}
                  className=" hover:scale-110 active:scale-95 duration-200"
                >
                  <FaRegTrashAlt className=" text-danger" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <SweetAlert2 {...swalProps} />
    </div>
  );
};

export default DataTableTool;
