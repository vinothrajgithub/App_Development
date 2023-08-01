package TaskManager;

import java.sql.Date;

public class ConcreteTask extends Task {
    public ConcreteTask(int id, String title, Date dueDate, boolean isCompleted) {
        super(id, title, dueDate, isCompleted);
    }

    @Override
    public void performTask() {
        // Implement the specific task behavior here
        System.out.println("Performing task: " + getTitle());
        System.out.println("Due Date: " + (getDueDate() != null ? getDueDate() : "N/A"));
        System.out.println("Status: " + (isCompleted() ? "Completed" : "Pending"));
        System.out.println();
    }
}
