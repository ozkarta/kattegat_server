module.exports = {
            path: 'child_category',
            model: 'Category',
            populate: [
                {
                    path: 'child_category',
                    model: 'Category',
                    populate: [
                        {
                            path: 'child_category',
                            model: 'Category',
                            populate: [
                                {
                                    path: 'child_category',
                                    model: 'Category',
                                    populate: [
                                        {
                                            path: 'child_category',
                                            model: 'Category',
                                            populate: [
                                                {
                                                    path: 'child_category',
                                                    model: 'Category',
                                                    populate: [
                                                        {
                                                            path: 'child_category',
                                                            model: 'Category',
                                                            populate: [
                                                                {
                                                                    path: 'child_category',
                                                                    model: 'Category',
                                                                    populate: [

                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }