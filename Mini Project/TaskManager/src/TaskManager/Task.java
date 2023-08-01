package TaskManager;

import java.sql.Date;

public abstract class Task {
    private int id;
    private String title;
    private Date dueDate;
    private boolean isCompleted;

    public Task(int id, String title, Date dueDate, boolean isCompleted) {
        this.id = id;
        this.title = title;
        this.dueDate = dueDate;
        this.isCompleted = isCompleted;
    }

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Date getDueDate() {
        return dueDate;
    }

    public void setDueDate(Date dueDate) {
        this.dueDate = dueDate;
    }

    public boolean isCompleted() {
        return isCompleted;
    }

    public void setCompleted(boolean completed) {
        isCompleted = completed;
    }

    // Abstract method to be implemented in subclasses
    public abstract void performTask();

    @Override
    public String toString() {
        return "Task{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", dueDate=" + dueDate +
                ", isCompleted=" + isCompleted +
                '}';
    }
}
