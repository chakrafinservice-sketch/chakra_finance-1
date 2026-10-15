import PocketBase from 'pocketbase';

const pb = new PocketBase('https://api.chakrafinances.com');
pb.autoCancellation(false);

export default pb;