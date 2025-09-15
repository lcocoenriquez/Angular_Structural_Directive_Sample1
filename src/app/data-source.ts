
export class DataSource {
  private data = 'Initial Data';

  async load(): Promise<string> {
    return new Promise(resolve => {
      setTimeout(() => {
        this.data = 'Loaded Data';
        resolve(this.data);
      }, 2000);
    });
  }
}
