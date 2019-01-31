import { BehaviorSubject } from 'rxjs';

export const StreamExampleTask = {
    title: 'Example task with stream',
    task: () => {
        const subject = new BehaviorSubject(undefined);
        subject.next('Foo');

        setTimeout(() => {
            subject.next('Bar');
        }, 2000);

        setTimeout(() => {
            subject.complete();
        }, 4000);
        return subject.asObservable();
    }
} as any;
