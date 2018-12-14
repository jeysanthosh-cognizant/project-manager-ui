export class Task {

    constructor(public taskId: number, public task: string, public priority: number, public startDate: string, public endDate: string, public status: string, public parentTask: ParentTask, public project: Project, public user: Users) {

    }
}

export class ParentTask {

    constructor(public parentId: number, public parentTask: string) {

    }
}

export class Project {

    constructor(public projectId: number, public project: string, public startDate: string, public endDate: string, public priority: string,
        public numberOfTasks: number, public completedTasks: number, public user: Users) {

    }
}

export class Users {


    constructor(public userId: number, public firstName: string, public lastName: string, public employeeId: number) {

    }
}