import { normalizr, schema} from 'normalizr';

const courses = new schema.Entity('courses');

const coursesNormalizer = (data) => {
	const normalizedData = normalizr(data, [courses]);
	return normalizedData.entities.courses;
};

export default coursesNormalizer;
