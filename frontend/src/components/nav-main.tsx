import { IconCirclePlusFilled, IconMail, type Icon } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  // AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { useForm } from "react-hook-form";
import {
  TaskSchema,
  type TaskFormData,
} from "@/validations/TaskFormSchema/TaskFormschema";
import { zodResolver } from "@hookform/resolvers/zod";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: Icon;
  }[];
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskFormData>({
    resolver: zodResolver(TaskSchema),
  });

  const onSubmit = (data: TaskFormData) => {
    console.log("Form Data:", data);
  };

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <SidebarMenuButton
                  tooltip="Quick Create"
                  className="bg-primary text-primary-foreground hover:bg-primary/70 min-w-8 duration-200 ease-linear"
                >
                  <IconCirclePlusFilled />
                  <span>Quick Create</span>
                </SidebarMenuButton>
              </AlertDialogTrigger>

              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Create New Task</AlertDialogTitle>
                </AlertDialogHeader>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-4 p-4 bg-white border border-gray-200 rounded-md max-w-md"
                >
                  {/* Task Name */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      Task Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 bg-gray-50"
                      placeholder="Enter task name"
                      {...register("taskTitle")}
                    />
                    {errors.taskTitle && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.taskTitle.message}
                      </p>
                    )}
                  </div>

                  {/* Task Description */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      Task Description
                    </label>
                    <textarea
                      className="w-full px-3 py-2 mt-1 rounded-md border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 bg-gray-50 resize-none"
                      placeholder="Enter task description"
                      rows={4}
                      {...register("taskDescription")}
                    />
                    {errors.taskDescription && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.taskDescription.message}
                      </p>
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="flex justify-end gap-2">
                    <AlertDialogCancel className="bg-gray-100 px-4 py-2 rounded-md">
                      Cancel
                    </AlertDialogCancel>
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow"
                    >
                      Create Task
                    </button>
                  </div>
                </form>
              </AlertDialogContent>
            </AlertDialog>
            <Button
              size="icon"
              className="size-8 group-data-[collapsible=icon]:opacity-0"
              variant="outline"
            >
              <IconMail />
              <span className="sr-only">Inbox</span>
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton tooltip={item.title}>
                {item.icon && <item.icon />}
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
