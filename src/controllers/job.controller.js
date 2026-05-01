import prisma from "../../prisma/client.js";
export const getJobsList = async (req, res) => {
  try {
    const jobs = await prisma.job.findMany();
    const formateData = jobs.map((job) => {
      const data = job.job_detail
      return {
        id: job.id,
        title: data.title,
        banner: data.banner,
        description: data.description,
        author: data.author,
        date: job.created_date,

        categories: data.categories?.map(i => i.label) || [],

        location: [
          data.overview?.find(i => i.label === "Location")?.value || ""
        ],
        jobType: [
          data.overview?.find(i => i.label === "Work Mode")?.value || ""
        ]
      }
      // res.json(formateData);
    })
    return res.json(formateData)
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
  

};
export const createJob = async (req, res) => {
  try {
    const job = await prisma.job.create({
      data: {
        job_detail: req.body
      }
    });

    res.json(job);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getJobDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const job = await prisma.job.findUnique({
      where: { id }
    });

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.json(job);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};